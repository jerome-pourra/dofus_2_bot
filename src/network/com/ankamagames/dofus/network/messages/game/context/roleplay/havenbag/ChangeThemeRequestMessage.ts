import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ChangeThemeRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4899;

	public theme: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ChangeThemeRequestMessage(input);
    }

    private deserializeAs_ChangeThemeRequestMessage(input: ICustomDataInput)
    {
        this._themeFunc(input);
    }

    private _themeFunc(input: ICustomDataInput)
    {
        this.theme = input.readByte();
    }

}