import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaPlayerBehavioursMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1302;

	public flags: Array<string>;
	public sanctions: Array<string>;
	public banDuration: number = 0;

    public constructor()
    {
        super();
        this.flags = Array<string>();
        this.sanctions = Array<string>();
    }

    public getMessageId()
    {
        return GameRolePlayArenaPlayerBehavioursMessage.protocolId;
    }

    public initGameRolePlayArenaPlayerBehavioursMessage(flags: Array<string> = null, sanctions: Array<string> = null, banDuration: number = 0): GameRolePlayArenaPlayerBehavioursMessage
    {
        this.flags = flags;
        this.sanctions = sanctions;
        this.banDuration = banDuration;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayArenaPlayerBehavioursMessage(output);
    }

    public serializeAs_GameRolePlayArenaPlayerBehavioursMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.flags.length);
        for(var _i1: number = 0; _i1 < this.flags.length; _i1++)
        {
            output.writeUTF(this.flags[_i1]);
        }
        output.writeShort(this.sanctions.length);
        for(var _i2: number = 0; _i2 < this.sanctions.length; _i2++)
        {
            output.writeUTF(this.sanctions[_i2]);
        }
        if(this.banDuration < 0)
        {
            throw new Error("Forbidden value (" + this.banDuration + ") on element banDuration.");
        }
        output.writeInt(this.banDuration);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaPlayerBehavioursMessage(input);
    }

    private deserializeAs_GameRolePlayArenaPlayerBehavioursMessage(input: ICustomDataInput)
    {
        let _val1: string;
        let _val2: string;
        let _flagsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _flagsLen; _i1++)
        {
            _val1 = String(input.readUTF());
            this.flags.push(_val1);
        }
        let _sanctionsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _sanctionsLen; _i2++)
        {
            _val2 = String(input.readUTF());
            this.sanctions.push(_val2);
        }
        this._banDurationFunc(input);
    }

    private _banDurationFunc(input: ICustomDataInput)
    {
        this.banDuration = input.readInt();
        if(this.banDuration < 0)
        {
            throw new Error("Forbidden value (" + this.banDuration + ") on element of GameRolePlayArenaPlayerBehavioursMessage.banDuration.");
        }
    }

}