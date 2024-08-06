import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class HavenBagRoomPreviewInformation implements INetworkType
{

	public static readonly protocolId: number = 8049;

	public roomId: number = 0;
	public themeId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return HavenBagRoomPreviewInformation.protocolId;
    }

    public initHavenBagRoomPreviewInformation(roomId: number = 0, themeId: number = 0): HavenBagRoomPreviewInformation
    {
        this.roomId = roomId;
        this.themeId = themeId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HavenBagRoomPreviewInformation(output);
    }

    public serializeAs_HavenBagRoomPreviewInformation(output: ICustomDataOutput)
    {
        if(this.roomId < 0 || this.roomId > 255)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element roomId.");
        }
        output.writeByte(this.roomId);
        output.writeByte(this.themeId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HavenBagRoomPreviewInformation(input);
    }

    private deserializeAs_HavenBagRoomPreviewInformation(input: ICustomDataInput)
    {
        this._roomIdFunc(input);
        this._themeIdFunc(input);
    }

    private _roomIdFunc(input: ICustomDataInput)
    {
        this.roomId = input.readUnsignedByte();
        if(this.roomId < 0 || this.roomId > 255)
        {
            throw new Error("Forbidden value (" + this.roomId + ") on element of HavenBagRoomPreviewInformation.roomId.");
        }
    }

    private _themeIdFunc(input: ICustomDataInput)
    {
        this.themeId = input.readByte();
    }

}